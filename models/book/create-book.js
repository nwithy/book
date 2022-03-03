const { pool } = require('../../modules/mysql-init')

const createBook = async book => {
	try {
		let { fidx, title, writer, content } = book
		let sql = " INSERT INTO books SET fidx=?, title=?, writer=?, content=? "
		const [rs] = await pool.execute(sql, [fidx, title, writer, content])
		return { success: true, idx: rs.insertId }
	}
	catch(err) {
		throw new Error(err)
	}
}

module.exports = { createBook } 