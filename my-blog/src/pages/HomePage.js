import './HomePage.css';

const HomePage = () => (
    <>
        <div className="header">
            <img src="https://cdn.pixabay.com/photo/2016/06/14/15/19/kitten-1456832_640.png" alt="Logo" className="logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            <h1 style={{ display: 'inline-block' }}>DLo CREW</h1>
        </div>
        <h1 className="title">DreamLounge: Unveiling the Secrets of Your Dreams</h1>
        <div className="intro">
            <h2 className="welcome">Welcome to DreamLounge, where dreams come alive! </h2>
            <p className="text">Did you know that research shows we remember one to three dreams per week on average? But not everyone is equal when it comes to recalling dreams. Some people, around 2.7% to 6.5% of the population, claim they never dream. Interestingly, many of these individuals used to recall their dreams when they were children. The proportion of people who say they have never dreamt in their entire life is remarkably low, at just 0.38%.</p>
            <p className="text">At DreamLounge, we believe that dreams are more than just fleeting moments during sleep. They hold hidden meanings, untapped creativity, and a world of inspiration. Whether you’re a vivid dreamer or someone who rarely remembers their dreams, DreamLounge is your sanctuary.</p>
            <p className="text">So, whether you’re a seasoned dream enthusiast or just dipping your toes into the dream pool, DreamLounge invites you to explore, connect, and dream beyond the ordinary. Let’s embark on this nocturnal adventure together! </p>
            <div style={{ textAlign: 'center' }}>
                <img src="https://cdn.pixabay.com/photo/2022/12/06/13/59/dog-7639052_640.jpg" alt="Dog" style={{ width: '20%', display: 'inline-block' }} />
            </div>
        </div>
        <h3 className="dreams-title">Interesting Dreams Shared by Our Community:</h3>
        <div className="dreams">
            <div className="dream">
                <h4>The Enchanted Forest</h4>
                <p><strong>Dreamer:</strong> Alex</p>
                <p>
                    "I found myself in an enchanted forest, where the trees were made of crystal and glowed with an inner light. The air was filled with the soft hum of magical creatures. As I walked, I stumbled upon a clearing with a shimmering pool at its center. Gazing into the water, I saw reflections of my deepest desires and fears. Suddenly, a majestic stag with golden antlers emerged from the trees, bowing its head as if inviting me to follow. I felt a sense of peace and wonder, knowing I was embarking on a journey of self-discovery."
                </p>
                <p><strong>Reflection:</strong> "This dream made me realize the importance of exploring my inner world and embracing both my strengths and vulnerabilities. The enchanted forest symbolized a safe space where I could confront and understand my true self."</p>
            </div>
            <div className="dream">
                <h4>The Floating City</h4>
                <p><strong>Dreamer:</strong> Maya</p>
                <p>
                    "I was in a city that floated high above the clouds. The buildings were made of glass and light, connected by pathways of glowing mist. People moved effortlessly through the air, carried by translucent wings. I joined them, feeling the exhilaration of flying. In the heart of the city, there was a grand library containing the knowledge of the universe. Each book glowed with a different color, representing various realms of understanding. I spent what felt like hours absorbing the wisdom contained within those pages, feeling my mind expand with new possibilities."
                </p>
                <p><strong>Reflection:</strong> "This dream reminded me of the limitless potential of human imagination and the joy of learning. The floating city represented a utopia where knowledge and freedom coexisted, inspiring me to pursue my passions and continue seeking knowledge."</p>
            </div>
            <div className="dream">
                <h4>The Infinite Library</h4>
                <p><strong>Dreamer:</strong> Sophia</p>
                <p>
                    "I found myself in an endless library, where the shelves stretched infinitely in all directions, defying the laws of physics. Each book contained an entire universe within its pages, and as I opened one, I was transported into a different reality. One moment I was exploring ancient civilizations, the next I was on an alien planet with strange, sentient flora. In one book, I discovered a future Earth where humans had evolved into beings of pure energy, capable of traveling through time and space at will. I felt a profound connection to the knowledge and experiences within each book, as if I were part of something far greater than myself."
                </p>
                <p><strong>Reflection:</strong> "This dream made me realize the infinite possibilities within our minds and the importance of seeking knowledge beyond our current understanding."</p>
            </div>
            <div className="dream">
                <h4>The Celestial Orchestra</h4>
                <p><strong>Dreamer:</strong> Leo</p>
                <p>
                    "In my dream, I was floating in a vast, star-filled cosmos, surrounded by celestial bodies that emitted beautiful, harmonious sounds. Each star, planet, and nebula played a unique musical note, creating an orchestra of the universe. I realized I could conduct this cosmic symphony with my thoughts, making the stars dance and the galaxies swirl in rhythm. The music was so powerful that it transcended sound and became visible waves of color and light, painting the cosmos with breathtaking patterns. As I conducted, I felt an overwhelming sense of unity with the universe, understanding that everything was interconnected through this divine melody."
                </p>
                <p><strong>Reflection:</strong> "This dream showed me the beauty and harmony of the universe, and how everything is connected through a symphony of existence."</p>
            </div>
        </div>
    </>
);

export default HomePage;