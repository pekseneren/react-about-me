import '../App.css'

function LanguageStat(props) {
    const {name, percent, color} = props.stat

    return (
        <li className="mr-2" style={{display: 'inline'}}>
            <svg className="mr-1" style={{backgroundColor: color, borderRadius: '100%'}} viewBox="0 0 8 8" version="1.1" width="8" height="8" aria-hidden="true"></svg>
            <span className="mr-1 text-small" style={{fontWeight: 600, color: 'white'}}>{name}</span>
            <span className="text-small">{percent}</span>
        </li>
    );
}

export default LanguageStat;