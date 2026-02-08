import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const initialData = [
    { id: 1, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 2, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 3, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 4, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 5, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 6, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 7, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 8, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 9, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 10, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 11, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 12, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 13, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 14, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 15, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 16, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 17, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 18, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 19, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 20, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 21, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 22, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 23, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 24, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 25, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 26, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 27, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 28, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 29, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 30, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 31, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 32, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 33, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 34, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 35, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 36, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 37, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 38, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 39, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 40, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 41, status: "Done", email: "ken99@example.com", amount: 316 },
    { id: 42, status: "Pending", email: "abe45@example.com", amount: 242 },
    { id: 43, status: "Pending", email: "monserrat44@example.com", amount: 837 },
    { id: 44, status: "Done", email: "silas22@example.com", amount: 874 },
    { id: 45, status: "Pending", email: "carmella@example.com", amount: 721 },
    { id: 46, status: "Done", email: "ken99@example.com", amount: 316 },
]

const columns = [
    {
        accessorKey: "id",
        header: "sr no.",
        cell: ({ row }) => `${row.getValue("id")}`,
    },
    {
        id: "statusToggle",
        header: "Done",
        cell: ({ row, table }) => {
            const isDone = row.original.status === "Done"

            return (
                <Checkbox
                    checked={isDone}
                    onCheckedChange={(checked) => {
                        table.options.meta?.updateStatus(
                            row.original.id,
                            checked ? "Done" : "Pending"
                        )
                    }}
                />
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: ({ column, table }) => (
            <Button
                variant="ghost"
                onClick={() => {
                    const isSorted = column.getIsSorted()

                    if (isSorted === false) {
                        // 1st click → Done → Pending
                        column.toggleSorting(false)
                    } else if (isSorted === "asc") {
                        // 2nd click → Pending → Done
                        column.toggleSorting(true)
                    } else {
                        // 3rd click → reset to original order
                        table.resetSorting()
                        table.options.meta?.resetData()
                    }
                }}
            >
                Status
            </Button>
        ),
        sortingFn: (rowA, rowB) => {
            const order = { Done: 0, Pending: 1 }
            return order[rowA.original.status] - order[rowB.original.status]
        },
        cell: ({ row }) => (
            <span
                className={
                    row.original.status === "Done"
                        ? "text-green-600 font-medium"
                        : "text-yellow-600 font-medium"
                }
            >
                {row.original.status}
            </span>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
            </Button>
        ),
        cell: ({ row }) => row.getValue("email"),
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => `$${row.getValue("amount")}.00`,
    },
]


export default function AppointmentTable() {
    const [data, setData] = React.useState(initialData)
    const [columnFilters, setColumnFilters] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [sorting, setSorting] = React.useState([])
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 30,
    })

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            pagination
        },
        meta: {
            updateStatus: (id, status) => {
                setData(old =>
                    old.map(item =>
                        item.id === id ? { ...item, status } : item
                    )
                )
            },
            resetData: () => {
                setData(data)
            },
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,

        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    })

    return (
        <div className="w-full p-6">
            {/* Toolbar */}
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filter emails..."
                    value={table.getColumn("email")?.getFilterValue() ?? ""}
                    onChange={e =>
                        table.getColumn("email")?.setFilterValue(e.target.value)
                    }
                    className="max-w-sm"
                />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Columns</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(column => column.getCanHide())
                            .map(column => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    checked={column.getIsVisible()}
                                    onCheckedChange={value =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Table */}
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between py-4">

                <div className="text-sm text-muted-foreground">
                    {
                        data.filter(row => row.status === "Done").length
                    }{" "}
                    of {data.length} row done.
                </div>



                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
