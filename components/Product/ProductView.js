import s from "./p.module.css";
import Image from "next/image";

export default function ProductView() {
  return (
    <div className={s.root}>
      <div className={s.productTitle}>
        <h2>ArmChairs</h2>
      </div>

      <section className={s.gridImg}>
        <div className={s.imgContainer}>
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/c_fit,w_450/v1644734368/Cantarutti-Arco-1-02-I_pruj2l.jpg"
            alt="yumi"
          />
        </div>

        <div className={s.imgContainer}>
          <Image
            layout="fill"
            objectFit="contain"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1640016466/Cantarutti-Yumi-Chair-1.07.I_a8fahu.jpg"
            alt="yumi"
          />
        </div>
      </section>
    </div>
  );
}
