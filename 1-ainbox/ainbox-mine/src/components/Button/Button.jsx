

<div className="buttonsWrap">
<li id="button1"><a href=".">Important1</a></li>
<li id="button2"><a href=".">Important2</a></li>
</div>


const buttonStyle = {
      paddingInline: ".5rem",
      paddingBottom: ".25rem",
      borderRadius: "6rem"


};


const Button = ({ border, color, backgroundC, borderRadius,   label, onClick  }) => {
    return (
        <button
        classname={` border:${border} color:${color} backgroundColor:${backgroundC} borderRadius:${borderRadius}`}
        onClick={onClick}
        >
            {label}
        </button>
    );

}

export default Button;

