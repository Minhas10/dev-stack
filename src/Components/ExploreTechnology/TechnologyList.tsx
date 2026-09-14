import { use } from 'react';

import type { technology } from '../../types/technologyType';
import TechnologyCard from './TechnologyCard';
interface technologyListProps{
    technologyPromise: Promise<technology[]>;
    stack?: technology[];
    onAdd?:(technology:technology)=> void;
}
const TechnologyList = ({ technologyPromise }:technologyListProps) => {
    const technologies = use(technologyPromise);

    return (
        <div className='container m-auto grid grid-cols-3  gap-2 '>
            {technologies.map((technology:technology) => {
                // const isAdded= stack.some((item)=>item.id===technology.id);
                return (
                    
                        <TechnologyCard 
                        key={technology.id}
                        technology={technology}
                         />
                    
                );
                // console.log(tech.name);
            })}     
            
        </div>
    );
};

export default TechnologyList;





















// import type { technology } from "../../types/technologyType";
// import { use } from "react";
// import TechnologyCard from "./TechnologyCard";

// interface TechnologiesProps {
//     technologyPromise: Promise<technology[]>;
// }
// const Technologies = ({ technologyPromise }: TechnologiesProps) => {
//     const technologies = use(technologyPromise);
//     console.log(technologies);
//     {technologies.map((tech) => {
//         console.log(tech.name);
//     })} 
//     return (
//         <div>
//             <TechnologyCard technology={technologies} />
//         </div>
//     );
// };

// export default Technologies;