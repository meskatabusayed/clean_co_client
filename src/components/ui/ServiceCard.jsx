const ServiceCard = ({services}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{services?.name}</h2>
          <p>{services?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{services?.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
