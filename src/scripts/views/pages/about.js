import '../../component/JumbotronElement';
import '../../component/CategoryCard';

const About = {
  async render() {
    return `
      <div class="content-about">
        <h1 class="header-about">About Us</h1>
        <p class="body-about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('jumbotron-element').style.display = 'none';
  },
};

export default About;
