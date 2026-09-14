import { use } from 'react';

import type { technology } from '../../types/technologyType';
import TechnologyCard from './TechnologyCard';
interface technologyListProps{
    technologyPromise: Promise<technology[]>;
    stack: technology[];
    onAdd:(technology:technology)=> void;
}
const TechnologyList = ({ technologyPromise,stack,onAdd }:technologyListProps) => {
    const technologies = use(technologyPromise);

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-cols-3  gap-4 '>
            {technologies.map((technology:technology) => {
                const isAdded= stack.some((item)=>item.id===technology.id);
                return (
                    
                        <TechnologyCard 
                        key={technology.id}
                        technology={technology}
                        isAdded={isAdded}
                        onAdd={onAdd}
                         />
                    
                );
                ;
            })}     
            
        </div>
    );
};

export default TechnologyList;
