import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinsis: [
                {id: '01', provinsi: 'Sumatera Utara'},
                {id: '02', provinsi: 'Sumatera Barat'}
            ],
            addedProvinsi: {id: '01', provinsi: 'Sumatera Utara'},
        };

        // Binding method
        //this.setId = this.setId.bind(this);
        this.setProvinsi = this.setProvinsi.bind(this);
        this.tambahData = this.tambahData.bind(this);
    }

    /*setId(e){
        let data = {id: e.target.value, provinsi: this.state.addedProvinsi.provinsi};
        this.setState({addedProvinsi: data});
    }*/
    setId = (e) => {
        this.setState({addedProvinsi: {id: e.target.value, provinsi: this.state.addedProvinsi.provinsi}});
    }
    
    setProvinsi(e){
        let data = {id: this.state.addedProvinsi.id, provinsi: e.target.value};
        this.setState({addedProvinsi: data});
    }

    tambahData(){
        let sts = this.state.provinsis;
        let st = {"id":this.state.addedProvinsi.id, "provinsi":this.state.addedProvinsi.provinsi};
        sts.push(st);
        this.setState({provinsis: sts});
        this.setState({addedProvinsi: st});
    }

    renderTableData() {

        let baris = [];
        this.state.provinsis.forEach(provinsiObject => {
            const { id, provinsi } = provinsiObject //destructuring
            baris.push(<tr key={id}>
                <td>{id}</td>
                <td>{provinsi}</td>
            </tr>);
        })
        return baris;
    }

    render() {
        console.log(this.renderTableData());
        return <div className="body">
            <h1 id='title'>{this.props.judul}</h1>
            <table id='provinsis'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PROVINSI</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>

            <div style={styles.container}>
            ID: <input type="text" onChange={this.setId} name="id"></input>
            <span>&nbsp;</span> <span>&nbsp;</span>
            PROVINSI: <input type="text" onChange={this.setProvinsi} name="provinsi"></input>
            <span>&nbsp;</span>
            <button onClick={this.tambahData}>TAMBAH</button>
            </div>

            <div style={styles.container}>
            Baru Saja ditambahkan:
            <br></br>ID: <span>{this.state.addedProvinsi.id}</span>
            <br></br>provinsi: <span>{this.state.addedProvinsi.provinsi}</span>
            </div>
        </div>;
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        marginTop: '20px'
    }
};

export default Table;