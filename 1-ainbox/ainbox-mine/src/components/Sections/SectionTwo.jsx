import './section.sass'
import '../Hero/hero.sass'

const SectionTwo = () => {
    return(
        <>
            <div className="one-main" style={{backgroundColor:"#f6f6f4"}}>
                <section className="contentWrap">
                    <div className="heroWrap" style={{
                        flexDirection:"column",
                        flex:"1 0 0px",
                        gap: "23px",
                        flexWrap:"nowrap",
                        height:"min-content",
                        justifyContent:"flex-start",
                        padding:"5px 0 0 ",
                        position:"relative",
                        width:"px"
                        }}>
                    <div className="headline">Rapidly Build Campaigns</div>
                    <p className="longText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores eum unde velit aliquid voluptas, deleniti pariatur itaque iste ea nesciunt. Reiciendis dicta non dolorem, autem tempora, magni qui quidem voluptates vel reprehenderit ea voluptatibus molestiae veritatis repellat nihil ut aspernatur error modi natus eligendi expedita! Dolorum, sit. Harum, dignissimos?</p>
                    <p className="longText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque? Neque amet necessitatibus, obcaecati possimus deleniti quae voluptatum fugiat expedita molestias blanditiis culpa laboriosam autem!</p>
                    <button id="button" style={{
                        backgroundColor:"#f6f6f4",
                        border:"1px solid #333",
                        color: "rgb(0,47,137)",
                    }}>Buy shit</button>
                    </div>
                    <div className="imgWrap">
                    <img src="https://framerusercontent.com/images/VKslDi2y9b6LMRXzQ7Ul3JTF08o.png" alt="" 
                    style={{
                        width:"410px"
                    }}/>
                    </div>
                    
                </section>
            </div>
        </>
    )

}
export default SectionTwo;