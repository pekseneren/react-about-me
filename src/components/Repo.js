import '../App.css'
import LanguageStat from "./LanguageStat";

function Repo(props) {
    const {id, url, name, description, stats} = props.repo

    let totals = 0;

    stats.forEach(function(item){
        totals+= item.usage;
    });

    stats.forEach(function(item){
        let percent = (100 * item.usage) / totals;
        item.percent = percent.toFixed(2) + "%";
    });

    return (
        <li className="repository">
            <div className="Box">
                <div className="container">
                    <a href={url} target="blank"><span>{name}</span></a>
                    <p className="text-small">{description}</p>
                    <div>{stats.map(stat => 
                        {
                            return <LanguageStat key={stat.name} stat={stat}/>
                        })}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Repo;