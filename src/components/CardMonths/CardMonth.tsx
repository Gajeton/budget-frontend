import CardMonthItem from "./CardMonthItem";

interface CardMonthProps {
    keyItem: string
}

const CardMonth = () => {

    return (
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2">
          {[
            "january",
            "feb",
            "mars",
            "avril",
            "mai",
            "juin",
            
          ].map((res) => {
            return <CardMonthItem keyItem={res} />;
          })}
        </div>
        <div className="my-4"></div>
      </div>
    );
};

export default CardMonth