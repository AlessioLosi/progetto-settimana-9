import { Container, Nav, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Footercustom = function () {
  return (
    <footer>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-2">
                <div class="row text-secondary text-align-center flex-column">
                    <div class="col">
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-youtube"></i>
                    </div>
                    <div class="col text-secondary">
                        <ul class="list-unstyled">
                            <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Audio & Subtitles</a></li>
                            <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Media Center</a></li>
                            <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Privacy</a></li>
                            <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-2 text-secondary">
                <ul class="list-unstyled">
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Audio Description</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Investor Relations</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Legal Notices</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-2 text-secondary">
                <ul class="list-unstyled">
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Help Center</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Jobs</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Cookie Preferences</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-2 text-secondary">
                <ul class="list-unstyled">
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Gift Cards</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Term Of Use</a></li>
                    <li><a href="javascript:void(0)" class="text-decoration-none link-secondary">Corporate Information</a></li>
                </ul>
            </div>
        </div>
        <div class="row flex-column mx-md-5 align-content-start">
            <div class="col-4">
            <button class="p-2 bg-dark text-secondary border border-secondary ">service Code</button></div>
            <div class="col-4">
            <p class="text-secondary">&copy;1997-2019 Netflix,inc.</p></div>
        </div>
    </div>
</footer>
  );
}


export default Footercustom