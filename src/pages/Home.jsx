import '../Home.css'
import Footer from './Footer';
import NavBar from './NavBar';
import Review from './Review/Review';
import Service from './Services/Service';
import TeamMember from './TeamMember';


const Home = () => {
    return (
        <div>
            <div>
            <NavBar></NavBar>
            <Service></Service>
            <TeamMember></TeamMember>
            <Review></Review>
            <Footer></Footer>      
            </div>
            
        </div>
    );
};

export default Home;