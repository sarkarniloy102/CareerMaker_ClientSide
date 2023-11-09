import Banner from "../Banner/Banner";
import FreAskQues from "../FreAskQues/FreAskQues";
import PopularServices from "../PopularServices/PopularServices";
import Tips from "../Tips/Tips";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <FreAskQues></FreAskQues>
            <Tips></Tips>
        </div>
    );
};

export default Home;