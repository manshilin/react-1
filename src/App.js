import Page from "./component/page";
import Header from "./component/header";
import Title from "./component/title";
import Photo from "./component/photo";
import Price from "./component/price";
import Box from "./component/box";
import ListItem from "./component/list-item";
import RoomList from "./component/room-list";
import Description from "./component/description";
import Details from "./component/details";
import Handiness from "./component/handiness";
import Owner from "./component/owner";
import Additional from "./component/additional";
import Reviews from "./component/reviews";
import Attractions from "./component/attractions";


function App() {
  const data = {
    listing_name: "Іст-Сайд Біл",
    reviews_summary: {
      average_rating: 4.9,
      total_reviews: 190,
    },
    location: {
      city: "Остін, Техас",
      country: "Сполучені Штати",
    },
    superhost: true,

    image: "https://picsum.photos/1000/1000",

    price: {
      original_price: 308,
      discounted_price: 218,
      currency: "$",
      cleaning_fee: 90,
      service_fee: 200,
    },
    availability: {
      checkin_date: "9/6/2023",
      checkout_date: "9/11/2023",
    },

    roomTypes: [
      {
        id: 5313,
        type: "Deluxe Room",
        pricePerNight: 300,
        currency: "$",
        capacity: 2,
      },
      {
        id: 6264,
        type: "Suite",
        pricePerNight: 500,
        currency: "$",
        capacity: 4,
      },
      {
        id: 7332,
        type: "Presidential",
        pricePerNight: 1000,
        currency: "$",
        capacity: 6,
      },
    ],

    description:
      "Насолоджуйтеся цим чистим, сучасним котеджем, розташованим у затишному, але зручному районі Центрально-Східного Остіна. Натхненний японськими чайними будинками, цей котедж на задньому дворі забезпечує легкий доступ до місць проведення SXSW, фестивалю ACL, центру міста, чудових ресторанів та громадського транспорту, а також пропонує спокійний відпочинок для відпочинку та зарядки.",

      property_details: {
        guests: {text:"гості", value: 2, imageSrc: "/svg/guests.svg" },
        bedrooms: { text:"спальня", value: 1, imageSrc: "/svg/bedroom.svg" },
        beds: {text:"ліжко", value: 1, imageSrc: "/svg/bed.svg" },
        baths: {text:"ванна кімната", value: 1, imageSrc: "/svg/bathroom.svg" },
      },

    neighborhood_info: "Район чарівний, веселий, безпечний і милий...",

    amenities: {
      pool: {text: "Бассейн", isornot: true, imageSrc: "/svg/pool.svg"},
      gym: {text :"Спортивний зал", isornot: false, imageSrc: "/svg/gym.svg"},
      breakfast: {text :"Безкоштовний сніданок", isornot: true, imageSrc: "/svg/breakfast.svg"},
      wifi: {text: "Безкоштовний Wi-Fi", isornot: true, imageSrc: "/svg/wifi.svg"},
      parking: {text:"Безкоштовний вуличний паркінг", isornot: false, imageSrc: "/svg/parking.svg"},
      pets: {text: "Дозволено розміщення з домашніми тваринами", isornot: false, imageSrc: "/svg/pets.svg"},
      transfer: { text: "Трансфер до/з аеропорту", isornot: true, imageSrc: "/svg/transfer.svg"},
      service: {text :"Консьєрж-сервіс", isornot: true, imageSrc: "/svg/service.svg"},
      cleaning: {text: "Обслуговування номерів", isornot: false, imageSrc: "/svg/cleaning.svg"},
      child: {text :"Підходить для дітей", isornot: true, imageSrc: "/svg/child.svg"},
    },

    contact_info: {
      name: "Kerthy",
      image: "/owner.svg",
      response_time: "Протягом години",
      response_rate: "100% відсотків швидкості відгуку",
      info: "Я кінорежисерка і телевізійний продюсер Остіна-Брукліна, якого можна знайти на велосипеді до Фермерського ринку...",
      phone: "+123-456-7890",
    },

    additional_properties: {
      house_rules: {
        title: "Правила будинку",
        value: "Паління та домашні тварини заборонені. Тиша з 22:00 до 7:00",
      },

      cancellation_policy: 
      {
        title: "Політика скасування",
        value: "Гнучка політика скасування з повним поверненням коштів у разі скасування за 7 днів до реєстрації.",
      },
      
      local_transportation: {
        title: "Місцевий транспорт",
        value: "Публічні автобуси та таксі доступні у пішій доступності.",
      },
      
      host_languages: {
        title: "Мови господаря",
        value: "Англійська, Іспанська",
      },
     
      special_offers: {
        title: "Спеціальні пропозиції",
        value: "Знижка 20% за 7 днів або більше.",

      },
      checkin_instructions: {
        title: "Інструкції для реєстрації заїзду",
        value:
          "Час реєстрації заїзду - 15:00. Будь ласка, зв'яжіться з нами наперед з орієнтовним часом прибуття.",
      },
    },
        guestReviews: [
      {
        id: 43454,
        guestName: "Alice Johnson",
        rating: 5,
        review:
          "Дивовижний досвід! Персонал був дуже доброзичливим, а зручності були першокласними.",
      },
      {
        id: 75543,
        guestName: "Bob Smith",
        rating: 4,
        review:
          "Чудове розташування та гарні краєвиди. Проте ціни в ресторані були трохи завищені.",
      },
      {
        id: 55431,
        guestName: "Eve Williams",
        rating: 5,
        review:
          "Дуже сподобалися спа-процедури. Це було розслаблююче та відновлююче перебування.",
      },
    ],

    nearbyAttractions: [
      {
        id: 453,
        name: "Кришталевий пляж",
        link: "https://travel.bodo.ua/",
      },
      {
        id: 741,
        name: "Пішохідні стежки тропічних лісів",
        link:"https://travel.bodo.ua/",
      },
      {
        id: 422,
        name: "Острів водоспадів",
        link: "https://travel.bodo.ua/",
      },
      {
        id: 876,
        name: "Культурні екскурсії селом",
        link: "https://travel.bodo.ua/",
      },
    ],
  };

  return (
  <Page>
    <Header/>
    <Title 
    title = {data.listing_name}
    rating = {data.reviews_summary.average_rating}
    reviews = {data.reviews_summary.total_reviews}
    city = {data.location.city}
    country = {data.location.country}
    superhost = {data.superhost}
    />
    <Photo src = {data.image} name = {data.listing_name}/>
    <Price
    price={data.price.original_price}
    discount={data.price.discounted_price}
    currency={data.price.currency}
    cleaning = {data.price.cleaning_fee}
    service = {data.price.service_fee}
    checkin={data.availability.checkin_date}
    checkout={data.availability.checkout_date}
    />
    <RoomList list = {data.roomTypes}/>
    <Description title = "Опис" children={data.description} />
    <Details title="Деталі властивості" children={data.property_details} />

    <Description title = "Про сусідів" children={data.neighborhood_info} />

    <Handiness title="Зручності" children={data.amenities} />
    <Owner 
    name = {data.contact_info.name}
    image = {data.contact_info.image}
    response_rate = {data.contact_info.response_rate}
    response_time = {data.contact_info.response_time}
    info = {data.contact_info.info}
    phone = {data.contact_info.phone}
    />

    <Additional 
    heading="Додаткова інформація"
    children={data.additional_properties}
    />
    <Reviews list = {data.guestReviews}/>
    <Attractions list = {data.nearbyAttractions}/>
    </Page>
  );
}

export default App;
