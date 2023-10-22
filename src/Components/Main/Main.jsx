import React from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import img1 from '../../Assets/img1.jpg'


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    },
    // {
    //     id: 2,
    //     imgSrc: img2,
    //     destTitle: 'Machu Pichu',
    //     location: 'Peru',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$600',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 3,
    //     imgSrc: img3,
    //     destTitle: 'Great Barrier Reef',
    //     location: 'Australia',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$700',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 4,
    //     imgSrc: img4,
    //     destTitle: 'Cappadocia',
    //     location: 'Turkey',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$800',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 5,
    //     imgSrc: img5,
    //     destTitle: 'Guanajuato',
    //     location: 'Mexico',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$1100',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 6,
    //     imgSrc: img6,
    //     destTitle: 'Cinque Terre',
    //     location: 'Italy',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$840',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 7,
    //     imgSrc: img7,
    //     destTitle: 'Angkor Wat',
    //     location: 'Cambodia',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$790',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 8,
    //     imgSrc: img8,
    //     destTitle: 'Taj Mahal',
    //     location: 'India',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$900',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // },
    // {
    //     id: 9,
    //     imgSrc: img9,
    //     destTitle: 'Bali Island',
    //     location: 'Indonesia',
    //     grade: 'CULTURAL RELAX',
    //     fees: '$500',
    //     description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventures activities.',
    // }

]

const Main = () => {
  return (
    <section className="main container section">
        <div className="secTitle">
            <h3 className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                    return (
                        <div key={id} className="singleDestination">
                            {/*Here it will return single id from the map array*/}
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">
                                    {destTitle}
                                </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>

                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS 
                                    <HiOutlineClipboardCheck className="icon" />
                                </button>


                            </div>
                        </div>
                    )

                })
            }
        </div>

    </section>
  )
}

export default Main