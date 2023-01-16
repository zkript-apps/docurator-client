
export const STUDENT_FORM138_COLUMNS = [
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
    {
        Header: "Teacher",
        accessor: "teacher",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Principal",
        accessor: "principal",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
];