import type { technology } from '../../types/technologyType';

// type Technology = {
    // name: string;
// };

type TechnologyCardProps = {
    technology: technology;
    isAdded?:boolean;
};

const TechnologyCard = ({ technology,isAdded=false }: TechnologyCardProps) => {
    // console.log(technology, "Technology Card");
    
    
    
    return (
        <div className=''>
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
            <button disabled={isAdded}>{isAdded? "✓ Added to Stack":"Add to Stack"}</button>

                
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default TechnologyCard;