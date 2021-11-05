import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.banner}>
                <img src='https://images.france.fr/zeaejvyq9bhj/1rY6YFhCqPtvKWvr6xEK5M/52f144c7922412f39da2bbcf9640823b/ok-Plage-SantaGiulia2__Gevisions.jpg?w=1120&h=490&q=70&fl=progressive&fit=fill' />
            </div>
            {/* <div>
          <img src='https://icdn.lenta.ru/images/2020/07/13/16/20200713161106967/square_320_4dd6db2859b29f4b1ba2d684155a5cc6.png' />
        </div> */}
            <div className={s.descriptionBlock}>
                ava +description
            </div>
        </div>
    );
}

export default ProfileInfo;