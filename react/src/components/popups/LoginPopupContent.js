const LoginPopupContent = () => {
    return (
        <div className="LoginPopupContent">
            <h1 className="title">My Movies List</h1>


            <div className="form">
                <h2>Login</h2>
                <div className="inputs">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="email..."/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password..."/>
                </div>
                
                <div className="button">
                    Login
                </div>
            </div>

        </div>
    );
}
 
export default LoginPopupContent;