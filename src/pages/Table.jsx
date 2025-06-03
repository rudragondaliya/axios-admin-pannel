import React from 'react';
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Table = ({ productdata, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="main-panel">
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">Tables</h3>
              <ul className="breadcrumbs mb-3">
                <li className="nav-home">
                  <a href="#"><i className="icon-home" /></a>
                </li>
                <li className="separator"><i className="icon-arrow-right" /></li>
                <li className="nav-item"><a href="#">Tables</a></li>
                <li className="separator"><i className="icon-arrow-right" /></li>
                <li className="nav-item"><a href="#">Basic Tables</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col">
                <div className="card p-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Warehouse</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productdata.map((val, index) => {
                        const { image, product_name, comment, price, stock, godown, id } = val;
                        return (
                          <tr key={id}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={image?.url} className="img-fluid" alt={product_name} style={{ width: "50px", height: "50px" }} />
                            </td>
                            <td>{product_name}</td>
                            <td>{comment}</td>
                            <td>{price}</td>
                            <td>{stock}</td>
                            <td>{godown.join(', ')}</td>
                            <td className="d-flex gap-2">
                              <button className="btn btn-outline-danger my-2" onClick={() => handleDelete(id)}><FaRegTrashAlt /></button>
                              <Link to="/Form"><button className="btn btn-outline-warning my-2" onClick={() => handleEdit(id)}><FaEdit /></button></Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid d-flex justify-content-between">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item"><a className="nav-link" href="http://www.themekita.com">ThemeKita</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Licenses</a></li>
              </ul>
            </nav>
            <div className="copyright">
              2024, made with <i className="fa fa-heart heart text-danger" /> by
              <a href="http://www.themekita.com"> ThemeKita</a>
            </div>
            <div>
              Distributed by <a target="_blank" href="https://themewagon.com/" rel="noreferrer">ThemeWagon</a>.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Table;
