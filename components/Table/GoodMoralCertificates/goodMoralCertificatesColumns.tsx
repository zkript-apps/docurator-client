import { Row } from "react-bootstrap";

export const GOOD_MORAL_CERTIFICATES_COLUMNS = [
    {
        Header: "lrn",
        accessor: "lrn",
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
        accessor: "studentId.userId.lastName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "First Name",
        accessor: "studentId.userId.firstName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "School Name",
        accessor: "schoolName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "Signed by",
        accessor: "signedBy",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "Signee Position",
        accessor: "position",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "School Year",
        accessor: "academicYear",
        Cell: ({ value }) => {
            if (value) {
                return value.from + " - " + value.to
            } else {
                return "..."
            }

        },
    },
];