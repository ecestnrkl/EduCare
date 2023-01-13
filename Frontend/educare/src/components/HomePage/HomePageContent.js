import './HomePage.css';
import content from '../image/HomePageImage.png';

export default function HomePageContent() {
    return (
        <>
        <div className='hompage-background'>
            <div className='homepage-container'>
                <img
                    src={content}
                    className="homepage-content"
                    alt="content" />
                <h1 className='h1homepage'>Interkulturelle Verständigung ist uns wichtig</h1>
            </div>
        </div>

        <div className='hintergund'></div>
        </>
    )
}