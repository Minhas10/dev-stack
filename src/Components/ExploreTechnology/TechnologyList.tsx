import { use } from 'react';

import type { technology } from '../../types/technologyType';
import TechnologyCard from './TechnologyCard';

const TechnologyList = ({ technologyPromise }: { technologyPromise: Promise<technology[]> }) => {
    const technologies = use(technologyPromise);

    return (
        <div>
            {technologies.map(tech => <TechnologyCard 
            key={tech.name} technology={[tech]} />)}
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