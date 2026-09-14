import type { technology } from '../../types/technologyType';

// type Technology = {
    // name: string;
// };

type TechnologyCardProps = {
    technology: technology;
    isAdded:boolean;
    onAdd:(technology:technology)=>void;
};

const TechnologyCard = ({ technology,isAdded,onAdd }: TechnologyCardProps) => {
    // console.log(technology, "Technology Card");
    
    
    
    return (
        
            <div className='technology-card'>
            <div className='flex justify-between '>
                <img src={technology.icon} alt={technology.name} className='card-icon'/>
                <span>
                    {technology.badge}
                </span>
            </div>
            <h2>{technology.name}</h2>
            <p>{technology.description}</p>
            <div className='flex justify-between'>
             <span  className=" border-cyan-700 border-">{technology.category}</span>
                <span className=''>{technology.difficulty}</span>
                <span>⭐{technology.rating}</span>
            </div>
            <button onClick={()=> onAdd(technology)} 
            disabled={isAdded}>{isAdded? "✓ Added to Stack":"Add to Stack"}
            </button>

                
            </div>
            
        
    );
};

export default TechnologyCard;