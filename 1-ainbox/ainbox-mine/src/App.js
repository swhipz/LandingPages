import Header from "./components/Header/Header"
import MobileNav from "./components/MobileNav/MobileNav"
import './app.sass';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="bgColorOne">
        <header className="headerbar">
          <Header />
      </header>
      <div className="mobileNav">
      <MobileNav/>
      </div>
      
      <section className="heroElement">
      <h2 className="hook">Designed <br/>to help growing</h2>
      <p className="ptext">Our comprehensive marketing platform prioretizes your audience's needs.</p>
      <button>Book Demo</button> {/*to be replaced with a component*/}
      </section>
    </div>       
    <div className="bgColorThree">
      <h3>Unify your marketing <br />endeavours in one place</h3>
      <p className="ptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est iste totam eveniet voluptas inventore incidunt, ad non quibusdam delectus.</p>
    <button>Explore potential</button>
    </div>
    <div className="bgColorTwo">
     <h4>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quae maiores deleniti velit voluptate quaerat numquam atque rerum fugit harum. Nesciunt eligendi beatae et dignissimos nulla? Molestiae, perferendis. Perspiciatis quod sapiente minima cupiditate, omnis in sequi labore quas fugiat rerum."</h4> 
     <button>See our customer's story</button>
    </div>
    <div className="bgColorThree">
      <h5>Analytics</h5>
    </div>
    <div className="bgColorFour">
      <p className="ptext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur molestiae earum nobis a voluptates, assumenda expedita animi dicta? Quam saepe necessitatibus provident ut sunt iste eum, incidunt, reiciendis aut officiis expedita, tenetur minus aspernatur corporis voluptatibus adipisci rem. Itaque, suscipit tenetur iure, qui illo rem, officiis molestias unde non vitae alias fugit quas reiciendis praesentium. Atque excepturi dolores facere, hic odio dignissimos earum repellendus veniam soluta quidem ab mollitia nostrum nam sequi praesentium accusantium vel non asperiores reiciendis! Aut pariatur deserunt corporis optio. Dolorum nostrum fugit porro temporibus harum esse laboriosam voluptate enim officiis, neque a cum sapiente eum nihil. Error tenetur expedita alias maxime mollitia dolor perferendis at a nihil eius accusamus illo odio ipsam eum nobis iste, velit autem numquam id voluptatibus, laboriosam quod. Ducimus natus, architecto suscipit odio at fugit facere, perspiciatis corporis animi illum necessitatibus veritatis quisquam sed quos officia esse ut? Nulla eos at nihil quae expedita libero sequi dolorum doloremque, esse optio, ad temporibus qui laboriosam iste. Fuga ipsam nobis inventore tempora expedita, nostrum consequuntur nam possimus corrupti consectetur earum, odio autem voluptatum sint! Libero possimus non dolore at, illum totam quod? Praesentium esse quia iste exercitationem eos aut inventore rerum sed est veritatis. Sit assumenda impedit odio quas aspernatur quos adipisci sint culpa ducimus maiores rem nam, placeat minus et aliquam labore incidunt sunt nisi, at facilis unde iure nemo! Quis error nesciunt explicabo odit iusto nemo ducimus vero iure, veniam totam laboriosam debitis recusandae dolorum! Non enim aperiam hic iure ipsum.</p>
    </div>
    <div className="bgColorThree">
      <p>footer</p>
    </div>
    </div>
    </div>
    
  );
}

export default App;
