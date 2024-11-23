import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../../toastify';
import VendorForm from '../../components/vendors/VendorForm';
import { handleAPIData } from '../../hooks/useCustomApi';
import {
  resetVendorsComponentFunc,
  resetVendorsFunc,
  updateVendorsFunc
} from '../../reducers/vendorsSlice';


const PackageManagementNew = ({ obj }) => {
  const [ob, setOb] = useState({ ...obj });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const caughtDataOnClick = (catchData) => {
    if (catchData === 'packageManagementNewBackBtn') {
      dispatch(resetVendorsComponentFunc({ componentName: 'PackageManagement' }));
      history.push('/vendors/package-management-list');
    }
  }

  return (
    <div id={ob.id} className="vendor-dash dashboard-body">
      <div className="container-fluid overlay-major">
        {
          loading ?
            <div className="overlay-spinner">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div> :
            Array.isArray(ob.content) && ob.content.length > 0 && ob.content.map((o, ind) => {
              return (
                <div key={`package-management-new-${ind}`} className={`row ${o.class[0]}`}>
                  {
                    Array.isArray(o.fields) && o.fields.length > 0 && o.fields.map((field, index) => {
                      return (
                        <React.Fragment key={`package-management-new-field-${index}`}>
                          <VendorForm
                            component={ob.component}
                            item={field}
                            caughtDataOnClick={caughtDataOnClick}
                          />
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              )
            })
        }
      </div>

    </div>
  );
};

export default PackageManagementNew;