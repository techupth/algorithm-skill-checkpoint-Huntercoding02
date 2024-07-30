/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:

O log(n) Because of starting cut the loop from the middle and find result from cutting variable eveytime in each loop
O log(n) เพราะว่ามีการตัดข้อมูลที่ละครึ่งเริ่มจากตรงกลางทีจะหาว่าข้อมูลที่ต้องการอยู่ฝั่งไหนจากนั้นจะเริ่มตัดเรื่อยๆในทุกรอบการค้นหาจนกว่าจะเจอ
*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
O(n) It's a normal loop
O(n) เพราะว่าเป็นการคำนวณปกติ
*/

/* 
Which function is more efficient and why?
Answer:
Depend on the problem that you meet if the problem already sorted we will be able to use o(log n) it will be more efficient if not we should go normal loop
ขึ้นอยู่กับว่าโจทย์เป็นแบบไหน ถ้าให้โจทย์ในการค้นหาเรียงมาแล้วก้สามารถที่จะใช้ตัว o (log n ) ได้จะทำให้ได้ลูปที่มีประสิทธิภาพมากกว่าแต่ถ้าตัวข้อมูลที่ต้องการหาไม่ได้เรียงมาก็ควนใช้ linear ปกติดีกว่า
*/
