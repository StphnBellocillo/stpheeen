<template>
  <div>
    <div class="page-title">
      <div class="title" align="center">Welcome Aboard</div>
     
    </div>
    <div class="row"  style="font-family:'Proxima Nova';font-size:13px;">
      
     <p align="center">
        WareVent - a warehouse & inventory management solution

      </p>
      <div class="col-md-offset-1 col-md-10">
        <div class="card bg-white">
          <div class="card-header bg-success text-white">
            <div class="pull-left">
              <h4> Ready to start working ? </h4></div>
            <div class="card-controls">
             <!--  <a href="javascript:;" class="card-remove" card-control-remove=""><i class="card-icon-remove"></i></a> -->
            </div>
          </div>
            <div class="card-block">
            <div class="row">
               <div class="col-md-6">
                <h3> Keep track of your sales </h3>
                
                   <router-link to="/sales-orders/new">
                  <p>
                  <i class="fa fa-file fa-2x"></i> Create Sales Orders
                </p>
                </router-link>
                <router-link to="/contacts">
                <p>
                  <i class="fa fa-heart-o fa-2x"></i> My Contacts
                </p>
                 </router-link>
               
              </div><!-- /col-md-6 -->

              <div class="col-md-6">
               <h3> Keep track of your purchases </h3>
                 <router-link to="/purchase-orders/new">
                 <p>
                  <i class="fa fa-file-text fa-2x"></i> Create Purchase Orders
                </p>
                </router-link>
              
              </div><!-- /col-md-6 -->


            </div><!-- /row -->

            <div class="row">
              <div class="col-md-6">
               <h3> Monitor your inventory </h3>
                 <router-link to="/items">
                 <p>
                  <i class="fa fa-gift fa-2x"></i> My Items
                </p>
                </router-link>
                <router-link to="/settings/warehouses">
                 <p>
                  <i class="fa fa-building-o fa-2x"></i> My Warehouses
                </p>
                </router-link>
                <router-link to="/inventory">
                 <p>
                  <i class="icon-layers fa-2x"></i> My Inventory
                </p>
                </router-link>
              </div><!-- /col-md-6 -->

              <div class="col-md-6">
               <h3> Generate reports </h3>
                 <router-link to="/reports/per-rmr">
                 <p>
                  <i class="fa fa-file-text fa-2x"></i> Returned Materials By Customer
                </p>
                </router-link>
                  <router-link to="/reports/per-salespersons">
                 <p>
                  <i class="fa fa-file-text fa-2x"></i> Reports By SalesPerson
                </p>
                </router-link>
                <router-link to="/reports/per-principal">
                 <p>
                  <i class="fa fa-file-text fa-2x"></i> Reports By Principal
                </p>
                </router-link>
               
              </div><!-- /col-md-6 -->
            </div>
             
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script>

 export default {}

 </script>

