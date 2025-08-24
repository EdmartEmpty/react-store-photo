import Card from "../Card/Card.jsx";


export default function PicList({ filter }) {

    const picArr = [
        {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
            category: "Business Cards",
            name: "photo",
            id: 1
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites",
            name: "photo",
            id: 2
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites",
            name: "photo",
            id: 3
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
            category: "Websites",
            name: "photo",
            id: 4
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
            category: "Business Cards",
            name: "photo",
            id: 5
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
            category: "Websites",
            name: "photo",
            id: 6
        },  {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards",
            name: "photo",
            id: 7
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
            category: "Websites",
            name: "photo",
            id: 8
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
            category: "Flayers",
            name: "photo",
            id: 9
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
            category: "Websites",
            name: "photo",
            id: 10
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
            category: "Business Cards",
            name: "photo",
            id: 11
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
            category: "Websites",
            name: "photo",
            id: 12
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
            category: "Websites",
            id: 13
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
            category: "Business Cards",
            name: "photo",
            id: 14
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
            category: "Websites",
            name: "photo",
            id: 15
        }, {
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
            category: "Flayers",
            name: "photo",
            id: 16
        },{
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
            category: "Websites",
            name: "photo",
            id: 17
        }
    ]

    let filterPic;

    switch (filter.toLowerCase()) {
        case "all":
            filterPic = picArr;
            break;
        case "business cards":
            filterPic = picArr.filter(el => el.category === "Business Cards");
            break;
        case "websites":
            filterPic = picArr.filter(el => el.category === "Websites");
            break;
        case "flayers":
            filterPic = picArr.filter(el => el.category === "Flayers");
            break;
        default:
            filterPic = picArr;
    }


    return (
        <div className="pic__box">
            {filterPic.map((el) => (
                <div className="pic"  key={el.id} >
                    <Card
                        url={el.img}
                        category={el.category}
                        name={el.name} 
                    />
                </div>
            ))}
        </div>
    );
}