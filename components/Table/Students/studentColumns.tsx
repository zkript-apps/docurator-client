import { format } from "date-fns";

export const STUDENT_COLUMNS = [
    {
        Header: "First Name",
        accessor: "userId.firstName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Last Name",
        accessor: "userId.lastName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Email",
        accessor: "email",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Date of Birth (dd/mm/yyyy)",
        accessor: "dateOfBirth",
        Cell: ({ value }) => {
            if (value) {
                return format(new Date(value), "dd/MM/yyyy");
            } else {
                return "..."
            }

        },
    },
];