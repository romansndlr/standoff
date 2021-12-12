import * as React from "react";
import tableBackgroundUrl from "../assets/table-background.jpg";

const Divider = () => <hr className="border-white" />;

interface TableStatic {
  Divider: React.FC;
}

const Table: React.FC & TableStatic = ({ children }) => (
  <div
    className={`h-full bg-green-800 p-4 md:p-8 lg:p-12 xl:p-14 bg-cover bg-center bg-no-repeat`}
    style={{ backgroundImage: `url('${tableBackgroundUrl}')` }}
  >
    <div className="flex flex-col space-y-4">{children}</div>
  </div>
);

Table.Divider = Divider;

export default Table;
