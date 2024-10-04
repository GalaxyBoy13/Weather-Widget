import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1644703706048-3bb60ba29e00?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/05/11/Pictures/summer_258f7852-7390-11e9-8633-eb97ff886575.JPG";
    const COLD_URL="https://static.abplive.com/wp-content/uploads/2020/12/24190026/India-winters-AFP.jpg?impolicy=abp_cdn&imwidth=1200&height=675";
    const RAIN_URL="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/IMD.jpeg?VersionId=bK_YWR_1KIQGsqeRMRdMs3.0R8s0L9vC&size=690:388";

    return(
    <div className="InfoBox">
        {/* <h1>Weather Info - {info.weather}</h1> */}
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80? RAIN_URL : info.temp > 20? HOT_URL: COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80? <ThunderstormIcon/> : info.temp > 20? <WbSunnyIcon/>: <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelslike}&deg;C</b></p>
            </Typography>
        </CardContent>
        </Card>
        </div>
    </div>
    );
}