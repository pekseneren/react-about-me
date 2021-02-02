import '../App.css'
import LanguageStat from "./LanguageStat";
import LabelStackBar from "./LabelStackBar";
import LanguageColorData from '../constants/LanguageColors.json'

function Repo(props) {
    const {url, name, description, stats} = props.repo

    let totals = 0;

    stats.forEach(function(item){
        totals+= item.usage;
    });

    stats.forEach(function(item){
        let percent = (100 * item.usage) / totals;
        item.percent = percent.toFixed(2) + "%";
        item.color = LanguageColorData[item.name];

        if (item.color === undefined) {
            item.color = "#ccc"
        }
    });

    return (
        <li>
            <div className="box">
                <div className="container">
                    <a href={url} target="blank"><span>{name}</span></a>
                    <p className="text-small">{description}</p>
                    {
                        stats.length > 0 &&

                        <div>
                            <div className="mb-2">
                                <span className="text-small" style={{color: 'white', fontWeight: 600}}>Languages</span>
                            </div>
                            <div className="mb-2">
                                <span className="progress">
                                    {stats.map(stat => {
                                        return <LabelStackBar key={stat.name} stat={stat}/>
                                    })}
                                </span>
                            </div>
                            <div className="mb-2">
                                <ol>
                                    {stats.map(stat => {
                                        return <LanguageStat key={stat.name} stat={stat}/>
                                    })}
                                </ol>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </li>
    );
}

export default Repo;