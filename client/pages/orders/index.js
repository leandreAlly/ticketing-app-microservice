const OrderIndex = ({ orders }) => {
  console.log(orders.map((order) => order.status));
  return (
    <ul className="list-group mt-3 mb-5">
      {orders.map((order) => (
        <li key={order.id} className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">{order.ticket.title}</h5>
              <small>
                Status:{" "}
                <span
                  className={`badge rounded-pill text-bg-${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </small>
            </div>
            {/* Add any additional information or actions on the right side */}
            {/* For example, you can add a button to view details or take action */}
            <button className="btn btn-primary">View Details</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};
function getStatusColor(status) {
  switch (status) {
    case "created":
      return "warning";
    case "cancelled":
      return "danger";
    case "complete":
      return "success";
    default:
      return "secondary";
  }
}

export default OrderIndex;
