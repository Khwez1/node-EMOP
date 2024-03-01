<template>
  <div class="container">
    <nav class="navbar fixed-top">
   
    </nav>
    <main id="oi">
      <section class="mb-1">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>

        <div class="row justify-content-center">
          <div class="col-md-9 mb-md-0 mb-5">
            <form action="https://formspree.io/f/mwkdzevr" method="POST" id="form">
              <!-- Form content -->
              <div class="form-group">
                <label for="Inputfirstname" class="form-label">First Name</label>
                <input type="text" name="first_name" class="form-control" id="Inputfirstname" required>
              </div>
              <div class="form-group">
                <label for="Inputlastname" class="form-label">Last Name</label>
                <input type="text" name="surname" class="form-control" id="Inputlastname" required>
              </div>
              <div class="form-group">
                <label for="InputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="InputEmail1" required>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputmessage" class="form-label">Comments / Questions</label>
                <textarea name="message" class="form-control" id="exampleInputmessage" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto; /* Center the container */
  padding: 0 15px; /* Add some padding on the sides */
}

@media (max-width: 768px) {
  .form-control,
  .btn {
    width: 100%;
    margin-top: 10px;
    margin-left: 0; /* Override any specific margin settings to ensure full width on small screens */
  }
  label {
    display: block; /* Make sure labels are above inputs on small screens */
    margin-left: 0;
    margin-top: 15px;
  }
  .form-text {
    display: block;
    margin-left: 0;
    margin-top: 5px;
  }
}

/* Adjustments to other elements for responsiveness */
p, h2 {
  padding-left: 15px;
  padding-right: 15px;
}

/* Existing styles adjusted for responsiveness */
/* Add any specific styles you need here */
</style>
