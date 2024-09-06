import React from 'react'
import img1 from '../assets/img/bangladesh.jpg'
import img2 from '../assets/img/india.jpeg'
import img3 from '../assets/img/usa.jpg'
import { Link } from 'react-router-dom'

const BlogData = [
  {
    id: 1,
    image: img1,
    title: "The 10 best place to visit in Bangladesh",
    description: ` Cox’s Bazar

Famous for having the longest natural sea beach in the world, Cox’s Bazar is known for its golden sandy shores and tranquil waters. It’s an ideal destination for beach lovers and offers stunning sunset views and nearby attractions like Inani Beach.
Sundarbans

The Sundarbans is the world’s largest mangrove forest and a UNESCO World Heritage site. It’s known for its rich biodiversity, including the elusive Royal Bengal Tiger. Exploring the forest by boat offers a unique view of its natural beauty and wildlife.
Sajek Valley

Located in the Chittagong Hill Tracts, Sajek Valley is renowned for its stunning mountainous landscapes and lush green hills. It offers a serene environment, picturesque views, and opportunities to experience local tribal culture.
Rangamati

Known for Kaptai Lake, Rangamati is celebrated for its beautiful landscapes with rolling hills and tribal villages. The lake provides opportunities for boat rides, and the area is rich in tribal culture and local markets.
Bandarban

Another gem in the Chittagong Hill Tracts, Bandarban features dramatic landscapes including Nilgiri Hills, Nafakhum Waterfall, and Ruma Waterfall. It’s an excellent location for trekking and exploring the natural beauty of the region.
Paharpur

Home to the Paharpur Buddhist Vihara, a UNESCO World Heritage site, Paharpur offers significant archaeological and historical insights. It features the extensive ruins of an ancient Buddhist monastery.
Moulvibazar

Situated in the Sylhet Division, Moulvibazar is known for its lush tea gardens and natural beauty. The area includes scenic spots like Jaflong and Sreemangal, which are famous for their tea plantations and rainforests.
Saint Martin’s Island

Located near Cox’s Bazar, Saint Martin’s Island is a small coral island known for its crystal-clear waters and pristine beaches. It’s the only coral island in Bangladesh and offers a unique marine environment with vibrant coral reefs.
Chittagong

As a major port city, Chittagong features attractions like Patenga Beach and Foy’s Lake. The city is known for its bustling markets, rich history, and diverse culinary scene.
Sylhet

Located in northeastern Bangladesh, Sylhet is famous for its picturesque tea gardens and lush landscapes. It is home to natural attractions like the Ratargul Swamp Forest and the scenic Jaflong area, offering a beautiful backdrop for exploring the region’s natural and cultural richness.






`,
author: "Romicha Parvin",
date: "September, 2024"

  },
  {
    id: 2,
    image: img2,
    title: "The 10 best place to visit in India",
    description: `Taj Mahal, Agra

One of the most beautiful monuments in the world, the Taj Mahal is a stunning white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife.
Jammu and Kashmir

Known for its breathtaking natural beauty, Jammu and Kashmir offer picturesque landscapes including Sonamarg, Pahalgam, and the Dal Lake.
Mumbai

India's financial capital, Mumbai is famous for its vibrant lifestyle, bustling markets, and Bollywood film industry. It also boasts beautiful beaches and historic landmarks.
Varanasi

One of the oldest cities in India, Varanasi is renowned for its spiritual significance, ancient temples, and the ghats along the Ganges River.
Rajasthan

Rajasthan's cities like Jaipur, Udaipur, and Jodhpur are known for their magnificent forts, palaces, and rich royal heritage.
Kolkata

The capital of West Bengal, Kolkata is famous for its colonial architecture, cultural festivals, and diverse cuisine.
Goa

Known for its beautiful beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular destination for relaxation and entertainment.
Kerala

Famous for its serene backwaters, lush greenery, and rich cultural traditions, Kerala offers a peaceful retreat in places like Alleppey and Munnar.
Delhi

India's capital city, Delhi, is a bustling metropolis known for its historical monuments such as the Red Fort, India Gate, and Qutub Minar, as well as its vibrant street food scene.
Agra

Besides the Taj Mahal, Agra is home to other historical sites like the Agra Fort and Fatehpur Sikri, showcasing India's Mughal architecture and history.






`,
author: "Romicha Parvin",
date: "September, 2024"


  },

  {
    id: 3,
    image: img3,
    title: "The 10 best place to visit in USA",
    description: `New York City, New York

Known for its iconic landmarks like Times Square, Central Park, the Statue of Liberty, and Broadway, New York City is a vibrant cultural and economic hub.
Grand Canyon, Arizona

One of the natural wonders of the world, the Grand Canyon offers stunning vistas, hiking trails, and breathtaking views carved by the Colorado River.
San Francisco, California

Famous for the Golden Gate Bridge, Alcatraz Island, and its historic cable cars, San Francisco is a city with diverse neighborhoods and picturesque views.
Las Vegas, Nevada

Known for its vibrant nightlife, casinos, and entertainment shows, Las Vegas offers a unique experience with its numerous hotels, restaurants, and attractions.
Miami, Florida

Miami is renowned for its beautiful beaches, Art Deco architecture, and lively nightlife, as well as its diverse cultural scene and vibrant Latin American influence.
Yellowstone National Park

America's first national park, Yellowstone is known for its geothermal features, such as Old Faithful, as well as its wildlife and stunning landscapes.
New Orleans, Louisiana

Famous for its unique blend of French, Spanish, and Creole cultures, New Orleans is known for its jazz music, historic French Quarter, and annual Mardi Gras celebration.
Chicago, Illinois

Chicago offers a rich cultural scene with its museums, architecture, and deep-dish pizza. Key attractions include Millennium Park, Navy Pier, and the Art Institute of Chicago.
Washington, D.C.

The nation’s capital is home to historic landmarks such as the White House, the Capitol Building, the Lincoln Memorial, and numerous Smithsonian museums.
Hawaii

Known for its stunning beaches, volcanic landscapes, and unique culture, Hawaii offers beautiful islands like Oahu, Maui, and the Big Island, each with its own attractions and natural beauty.`,
author: "Romicha Parvin",
date: "September, 2024"


  }

]
const Blogs = () => {

  return (
    <>
   
    <div className='min-h-[650px] pt-20 py-2 bg-gray-100'>
     <div className='container mx-auto'>
   <h1 className= ' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Our Latest Blogs</h1>
   <div className='flex flex-wrap justify-center my-2 gap-6'>
    {BlogData.map((item,idx)=> (
          <div key={idx}>
                <Link 
              to={`/blogs/${item.id}`}
              state={{ image: item.image, date: item.date, title: item.title, description: item.description, author: item.author }}
              key={item.id}
            >
      <div className='shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer max-w-xs' >
        <div className='overflow-hidden'>
          <img className='w-full mx-auto h-[250px] object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110' src={item.image} alt="" />
        </div>
        <div className='flex justify-between pt-2 text-slate-400'>
          <p>{item.date}</p>
          <p>By {item.author}</p>
        </div>
        <div className='space-y-2 py-3'>
          <h1 className='line-clamp-1 font-bold'>{item.title}</h1>
          <p className='line-clamp-2'>{item.description}</p>
        </div>
      </div>
      </Link>
          </div>
   
    ))}
   </div>
    </div>

    </div>
    </>
  )
}

export default Blogs