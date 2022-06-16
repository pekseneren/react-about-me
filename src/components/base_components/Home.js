import { Container } from '@material-ui/core';
import '../../App.css'
import { Link } from "react-router-dom";
import github from "super-tiny-icons/images/svg/github.svg";
import stackoverflow from "super-tiny-icons/images/svg/stackoverflow.svg";
import linkedin from "super-tiny-icons/images/svg/linkedin.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import gmail from "super-tiny-icons/images/svg/gmail.svg";

function Home() {

    return (
        <Container className="py-5">
            <div className="box">
                <div className="m-5 text-white">
                    <p>Hello World 👋</p>
                    <p>I'm Eren(not the titan), I am a backend developer living in Istanbul ❤️</p>
                    <Link to="/react-about-me/projects">my github projects</Link>
                    <div className="mt-5 mx-auto">
                        <a href="https://github.com/pekseneren" target="blank">
                            <img className="social-link" alt="github" src={github} />
                        </a>
                        <a href="https://stackoverflow.com/users/6296896/eren-peksen" target="blank">
                            <img className="social-link" alt="stackoverflow" src={stackoverflow} />
                        </a>
                        <a href="https://www.linkedin.com/in/eren-peksen" target="blank">
                            <img className="social-link" alt="linkedin" src={linkedin} />
                        </a>
                        <a href="https://twitter.com/pekseneren" target="blank">
                            <img className="social-link" alt="twitter" src={twitter} />
                        </a>
                        <a href="mailto:peksen.eren@gmail.com">
                            <img className="social-link" alt="gmail" src={gmail} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;
