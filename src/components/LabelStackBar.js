import '../App.css'

function LabelStackBar(props) {
    const {color, percent} = props.stat

    return (
        <span style={{backgroundColor: color, width: percent}}></span>
    );
}

export default LabelStackBar;