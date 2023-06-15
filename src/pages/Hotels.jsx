import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Edit, Sort } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { hotelGrid, hotelsData } from '../data/hotels';
import Layout from '../components/Layout';

const Hotel = () => {
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };
  // delete action
  const actionBegin = (args) => {
    if (args.requestType === 'delete') { // triggers while deleting the record
      console.log('actionBegin delete triggers');
      console.log(args.data);
    }
    if (args.requestType === 'save') { // triggers while adding the record
      console.log('actionBegin triggers');
      console.log(args.data);
    }
  };

  const actionComplete = (args) => {
    if (args.requestType === 'save') { // triggers when the record was added
      console.log('actionComplete triggers');
      console.log(args.data);
    }
    if (args.requestType === 'delete') { // triggers when the record was deleted
      console.log('actionComplete triggers');
      console.log(args.data);
    }
  };
  return (
    <Layout>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Hotels" />
        <GridComponent
          dataSource={hotelsData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5, pageSize: 8 }}
          editSettings={editing}
          toolbar={toolbarOptions}
          actionBegin={actionBegin}
          actionComplete={actionComplete}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {hotelGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar, Edit, Sort]} />

        </GridComponent>
      </div>
    </Layout>
  );
};
export default Hotel;
