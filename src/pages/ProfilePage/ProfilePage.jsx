import React, { useContext, useEffect, useState } from 'react'
import './ProfilePage.css'
import { AuthContext } from './../../context/auth.context'
import userServices from '../../services/user.services'
import { Container, Row, Col, Carousel, Spinner } from "react-bootstrap"
import ExhibibtionList from '../../components/ExhibitionList/Exhibitionlist'

function ProfilePage() {

    const { user } = useContext(AuthContext)

    const [userData, setUserInfo] = useState({})
    const [artworkData, setArtworkInfo] = useState([])
    const [exhibitionData, setExhibitionInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadUserInfo()
    }, [user])

    const loadUserInfo = () => {

        userServices
            .getOneUsers(user._id)
            .then(({ data }) => {
                setUserInfo(data.userInfo)
                setArtworkInfo(data.artworksInfo)
                setExhibitionInfo(data.exhibitionsInfo)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>**BACKGROUND IMGAE**</h1>
            <h1>{userData?.username} {userData?.lastname}</h1>
            <hr />
            <Container>
                {
                    isLoading
                        ?
                        <Spinner animation="border" size="sm" />
                        :
                        <>
                            <Row className="d-flex align-items-center">
                                <Col md={{ span: 3, offset: 3 }}>
                                    <img src={userData?.imageuser} alt="User Image" className="img-fluid" />
                                </Col>
                                <Col md={6}>
                                    <h2>{userData?.username} {userData?.lastname}</h2>
                                    <h2>{userData?.country}</h2>
                                    <h2>{userData?.birthyear}</h2>
                                    <h5>Bio: {userData?.userbio}</h5>
                                </Col>
                            </Row>

                            <hr />
                            <h2>ARTWOKS{
                                artworkData?.map(elm => <p>{elm.title}</p>)
                            }</h2>
                            <div className="carousel-container">
                                <Carousel>
                                    <Carousel.Item interval={9000}>
                                        <div className='HomePage'>
                                            <img src={"https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/20140331100625_ferderico_herrero_untitled2008.jpg"} alt="Cover" className="coverImage" />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item interval={9000}>
                                        <div className='HomePage'>
                                            <img src={"https://6d49d47bd32a151032ae-907965fc79c9900a93c12efeb23103bd.ssl.cf1.rackcdn.com/artworks/20140331103410_Federico_herrero_barco.jpg"} alt="Cover" className="coverImage" />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>


                            <hr />
                            <h2>Expos: {
                                exhibitionData?.map(elm => <p>{elm.title}</p>)
                            }
                            </h2>
                            {/* <ExhibibtionList exhibitions={exhibitionData} /> */}
                        </>
                }
            </Container>
        </div>
    )
}

export default ProfilePage

















// import React, { useContext, useEffect, useState } from 'react'
// import './ProfilePage.css'
// import { AuthContext } from './../../context/auth.context'
// import userServices from '../../services/user.services'

// function ProfilePage() {
//     const { user } = useContext(AuthContext)
//     const [userData, setUserInfo] = useState({})
//     const [userData, setUserInfo] = useState({})
//     const [userData, setUserInfo] = useState({})

//     useEffect(() => {
//         loadUserInfo()
//     }, [user])

//     const loadUserInfo = () => {
//         userServices
//             .getOneUsers(user._id)
//             .then(({ data }) => setUserInfo(data))
//             .catch(err => console.log(err))
//     }

//     // if (!userInfo) {
//     //     return <div>Loading...</div>
//     // }

//     const { userInfo, artworksInfo, exhibitionsInfo } = userData

//     return (
//         <div>
//             <h1>PERFIL DE USUARIO</h1>
//             <h1>Hola {userInfo?.username}</h1>
//             <hr />
//             <h2>Bio: {userInfo?.userbio}</h2>
//             <h2>Last Name: {userInfo?.lastname}</h2>
//             <h2>Country: {userInfo?.country}</h2>
//             <hr />
//         </div>
//     )
// }

// export default ProfilePage

