import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../chart/Chart';
import { productData } from '../../../dummyData';
import {Publish} from '@material-ui/icons';

export default function Product() {
  return (
    <div className='product'>
     <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
        <button className="productAddButton">Cretae</button>
        </Link>
     </div>
      <div className="productTop">
    <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Performance"  />
    </div>
    <div className="productTopRight">
        <div className="productInfoTop">
           <img className="productInfoImg" src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
           <span className="productName">Apple Airpods</span> 
        </div>
        <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">id</span>  
                <span className="productInfoValue">123</span>     
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">sales</span>  
                <span className="productInfoValue">1213</span>     
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">active</span>  
                <span className="productInfoValue">yes</span>     
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>  
                <span className="productInfoValue">no</span>     
            </div>
        </div>
    </div>
      </div>
      <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpod' />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                      <img className='productUploadImg' src="https://images.pexels.com/photos/5099868/pexels-photo-5099868.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                      <label for="file">
                        <Publish className="productUploadIcon" />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
      </div>
    </div>
  )
}
