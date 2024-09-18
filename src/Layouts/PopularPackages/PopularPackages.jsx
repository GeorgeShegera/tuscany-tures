import React from "react";
import style from "./PopularPackages.module.scss";
import PackageCard from "../../Components/PackageCard/PackageCard";

export default function PopularPackages({ className }) {
  return (
    <section className={`${className} ${style.section}`}>
      <h2 className={`heading-secondary ${style.heading}`}>
        The Most Popular Packages
      </h2>
      <div className={style.container}>
        <PackageCard
          img={"/imgs/PopularPackages/bike_rickshaw.png"}
          heading={"BIKE / RICKSHAW"}
          price={10}
          mapTags={new Map()
            .set("calendar", "Your bike for a day")
            .set("map", "City App")
            .set("discount", "Discount on Rickshaw")
            .set("support", "Guaranteed Support")}
        ></PackageCard>
        <PackageCard
          img={"/imgs/PopularPackages/bike_tours.png"}
          heading={"bike tours"}
          price={30}
          mapTags={new Map()
            .set("mountain", "A Mountain Bike Included")
            .set("guide", "A Guide For You")
            .set("water", "Bottle of water")
            .set("support", "Guaranteed Support")}
        ></PackageCard>
        <PackageCard
          img={"/imgs/PopularPackages/bus_trips.png"}
          heading={"Bus trips"}
          price={45}
          mapTags={new Map()
            .set("ticket", "Park ticket")
            .set("bus", "Return bus")
            .set("companion", "Companion")
            .set("support", "Guaranteed Support")}
        ></PackageCard>
        <PackageCard
          img={"/imgs/PopularPackages/driver_taxi.png"}
          heading={"Transfer"}
          price={10}
          mapTags={new Map()
            .set("driver", "Personal Driver")
            .set("location", "Wherever You Want")
            .set("best-price", "At the best price")
            .set("support", "Guaranteed Support")}
        ></PackageCard>
      </div>
    </section>
  );
}
