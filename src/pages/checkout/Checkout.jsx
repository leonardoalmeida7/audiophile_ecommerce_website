import Main from '../../layouts/Main'
import GoBack from '../../components/main/GoBack'

import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <Main className={styles.ContainerMain}>
      <GoBack />
      <section className={styles.checkout}>
        <div>
          <h1>Checkout</h1>
        </div>
        <div className="billing-details">
          <div>
            <h2>Billing Details</h2>
          </div>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder='Alexei Ward'/>
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder='alexei@mail.com'/>
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" required placeholder='+1 202-555-0136'/>
            </div>
          </form>
        </div>
        <div>
          <div>
            <h2>Shipping Info</h2>
          </div>
          <form>
            <div>
              <label htmlFor="address">Your Address</label>
              <input type="text" id="address" name="address" required placeholder='1137 Williams Avenue'/>
            </div>
            <div>
              <label htmlFor="city">ZIP Code</label>
              <input type="text" id="city" name="city" required placeholder='10001'/>
            </div>
            <div>
              <label htmlFor="zip">City</label>
              <input type="text" id="zip" name="zip" required placeholder='New York'/>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required placeholder='United States'/>
            </div>
          </form>
        </div>
        <div className={styles.payment}>
          <div>
            <h2>Payment Details</h2>
          </div>
          <form>
            <span>Payment Method</span>
            <div className={styles.paymentMethod}>
              <input type='radio' id="e-money" name="payment-method" value="e-money" defaultChecked />
              <label htmlFor="card-name">e-Money</label>
            </div>
            <div className={styles.paymentMethod}>
              <input type='radio' id="cash-on-delivery" name="payment-method" value="cash-on-delivery" />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </form>
          <form>
            <div>
              <label htmlFor="e-money-number">e-Money Number</label>
              <input type="text" id="e-money-number" name="e-money-number" placeholder="238521993" />
            </div>
            <div>
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input type="text" id="e-money-pin" name="e-money-pin" placeholder="6891" />
            </div>
          </form>
        </div>
      </section>
    </Main>
  )
}

export default Checkout