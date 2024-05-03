import React from 'react'
import './style.css'
import Header2 from '../../2_Header2/Header2';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Wishlist = () => {
    //     function createData(
    //         name,
    //         calories,
    //         fat,
    //         carbs,
    //         protein,
    //       ) {
    //         return { name, calories, fat, carbs, protein };
    //       }

    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];

    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div>
                <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
                    <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
                        <a href="" className='home' >Home</a>
                        <div className='mt-3 ms-2' >
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2] -me-2' ></div>
                        </div>
                        <p className='text-gray-400' >Wishlist</p>
                    </div>
                    <h1 className='top-20 left-10 absolute text-[42px] font-bold'>Wishlist</h1>
                </div>
            </div>
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div>



    )
}

export default Wishlist;
