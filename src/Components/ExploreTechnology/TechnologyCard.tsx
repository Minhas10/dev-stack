
type Technology = {
    name: string;
};

type TechnologyCardProps = {
    technology: Technology[];
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    console.log(technology, "Technology Card");
    
    {technology.map((tech) => {
            
            })}
    
    return (
        <div>
          <img src="{tec}" alt="" />  
        </div>
    );
};

export default TechnologyCard;