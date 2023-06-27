// "use client"
// import Image from 'next/image'
// import { Hero} from '@/components'
// import SearchBar from '@/components/SearchBar'
// import CustomFilter from '@/components/CustomFilter'
// import { fetchCars } from '@/utils'
// import { fuels } from '@/constants'
// import CarCard from '@/components/CarCard'
// export default async function Home() {
//   const allCars = await fetchCars();


//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
//   return (
//     <main className='overflow-hidden'>
//       <Hero/>
//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//           <p>Explore out cars you might like</p>
//         </div>
//         <div className='home__filters'>
//         <SearchBar />
//         <div className='home__filter-container'>
//         {/* <CustomFilter title='fuel' />
//         <CustomFilter title='year'/> */}
//         </div>
//         </div>
//         (!isDataEmpty ? (
//           <section>
//           <div className='home__cars-wrapper'>
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>
            
//           </section>
//         ):(
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )

//         )
//         </div>
//     </main>     
//   )
// }
























// "use client"
// import { fetchCars } from "@/utils";
// import { HomeProps } from "@/types";
// import { fuels } from "@/constants";
// import {CustomFilter} from "@/components";
// import { yearsOfProduction } from '../constants/index';
// import { CarCard } from "@/components";
// import {Hero} from "@/components";  
// import {SearchBar} from "@/components";
// import ShowMore from "@/components/ShowMore";
// export default async function Home({ searchParams }: HomeProps) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || "",
//     year: searchParams.year || 2022,
//     fuel: searchParams.fuel || "",
//     limit: searchParams.limit || 10,
//     model: searchParams.model || "",
//   }

//   );
//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
// console.log("isDataEmpty",isDataEmpty,);

//   return (
//     <main className='overflow-hidden'>
//       <Hero />
//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//           <p>Explore out cars you might like</p>
//         </div>
//         <div className='home__filters'>
//           <SearchBar />

//           {/* <div className='home__filter-container'>
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction} />
//           </div> */}
//         </div>

//         {!isDataEmpty ? (
//           <section>
//             <div className='home__cars-wrapper'>
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>

            
//           </section>
//         ):(
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }





























































// "use client";
// import { useState, useEffect } from 'react';
// import { fetchCars } from '@/utils';
// import { HomeProps } from '@/types';
// import { fuels } from '@/constants';
// import { CustomFilter } from '@/components';
// import { yearsOfProduction } from '../constants/index';
// import { CarCard } from '@/components';
// import { Hero } from '@/components';
// import { SearchBar } from '@/components';
// import ShowMore from '@/components/ShowMore';

// interface Car {
//   id: number;
//   // Other properties of the car
// }

// export default function Home({ searchParams }: HomeProps) {
//   const [allCars, setAllCars] = useState<Car[]>([]);
//   const [isDataEmpty, setIsDataEmpty] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data: Car[] = await fetchCars({
//           manufacturer: searchParams.manufacturer || '',
//           year: searchParams.year || 2022,
//           fuel: searchParams.fuel || '',
//           limit: searchParams.limit || 10,
//           model: searchParams.model || '',
//         });

//         if (!Array.isArray(data) || data.length < 1) {
//           setIsDataEmpty(true);
//           setErrorMessage('Oops, no results');
//         } else {
//           setIsDataEmpty(false);
//           setAllCars(data);
//         }
//       } catch (error) {
//         setIsDataEmpty(true);
//         setErrorMessage('Error fetching car data');
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [searchParams]);

//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
//           <p>Explore our cars you might like</p>
//         </div>
//         <div className="home__filters">
//           <SearchBar />

//           {/* <div className='home__filter-container'>
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction} />
//           </div> */}
//         </div>

//         {!isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allCars?.map((car) => (
//                 <CarCard key={car.id} car={car} />
//               ))}
//             </div>
//           </section>
//         ) : (
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold">{errorMessage}</h2>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }





















































"use client"
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels } from "@/constants";
import {CustomFilter} from "@/components";
import { yearsOfProduction } from '../constants/index';
import { CarCard } from "@/components";
import {Hero} from "@/components";  
import {SearchBar} from "@/components";
import ShowMore from "@/components/ShowMore";
export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  }

  );
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
console.log("isDataEmpty",isDataEmpty,);

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          {/* <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
               <CarCard car={car} />
              ))}
            </div> 
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

