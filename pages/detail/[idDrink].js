import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Drink from '../../components/drink'
import axios from 'axios'
import { HomeOutlined, LeftOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'

export default function Detail(){
    const router = useRouter()
    const {idDrink} = router.query
    const [state, setState] = useState({
        posts: []
    })

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((result) => {
            setState({posts: result.data.drinks[0]});
        }); 
    }, [idDrink])

    const item = state.posts

    let ingredients = [
        (item.strIngredient1),
        (item.strIngredient2),
        (item.strIngredient3),
        (item.strIngredient4),
        (item.strIngredient5),
        (item.strIngredient6),
        (item.strIngredient7),
        (item.strIngredient8),
        (item.strIngredient9),
        (item.strIngredient10),
        (item.strIngredient11),
        (item.strIngredient12),
        (item.strIngredient13),
        (item.strIngredient14),
        (item.strIngredient15),
    ]

    return (
        <div className='overflow-hidden'>
            <div className='row align-items-center' style={{height:'100vh'}}>
                <div className='col-5 text-center'>
                    <div className='text-start ms-5 mb-4'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/" style={{position:'relative', bottom:'3px'}}>
                            <HomeOutlined/>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Detail {item.strDrink}</Breadcrumb.Item>
                    </Breadcrumb>
                    </div>
                    <img src={item.strDrinkThumb} width={230} className='rounded-3' alt={item.strDrink} />
                </div>
                <div className='col'>
                    <h3 className='fw-bold'>{item.strDrink}</h3>
                    <div className='d-flex'>
                        <div className='fw-bold'>
                            <p>Category</p>
                            <p>Instructions</p>
                            <p>Glass</p>
                            <p>Ingredients</p>
                        </div>
                        <div>
                            <p>: {item.strCategory}</p>
                            <p>: {item.strInstructions}</p>
                            <p>: {item.strGlass}</p>
                            <div className='d-flex flex-row nowrap'>
                                :
                                {ingredients.map((ingredient) => {
                                    if (ingredient){
                                        return <ul><li>{ingredient}</li></ul>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}