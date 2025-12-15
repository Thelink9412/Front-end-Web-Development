import { Carousel } from 'react-bootstrap'
function CarouselElement() {

    return (<Carousel className="custom-carousel">
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src=
                "https://greeking.me/images/blog/images/Italy-Vacations/Things-to-do-in-Sicily/things-to-do-in-sicily-hero.jpg"
                alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src=
                "https://img.nh-hotels.net/zZj6g/A9L6PM/original/Catania.jpg?output-quality=70&resize=*:*&background-color=white"
                alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src=
                "https://www.pettitts.co.uk/img/containers/assets/destinations/4-europe/4-italy/main-pages/guides/sicily-travel-guide/ancient-theatre-of-taormina-sicily.webp/3b880f8adc7db148c02d8fab0656d1e9/ancient-theatre-of-taormina-sicily.webp"
                alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 carousel-image"
                src=
                "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ic3a67313b8e37552/version/1497268884/sicily.jpg"
                alt="Fourth slide" />
        </Carousel.Item>
    </Carousel>)
}

export default CarouselElement  