import React, { Component } from 'react'
import { characters } from '../data/Characters'
import Form from './Form/Form'
import Table from './Table/Table'
import uuidv4 from 'uuid'
import './App.css'

export default class App extends Component {
  state = {
    characters: [],
    name: '',
    job: '',
    isEditing: false
  }

  componentDidMount() {
    this.setState({
      characters
    })
  }

  onNameChange = name => {
    this.setState({
      name
    })
  }

  onJobChange = job => {
    this.setState({
      job
    })
  }

  handleSubmit = e => {
    const { name, job, characters } = this.state

    if (!name || !job) {
      alert('Please fill out both fields.')
    } else {
      e.preventDefault()
      this.setState(prevState => {
        return {
          characters: [...characters, { name, job, id: uuidv4() }],
          name: '',
          job: ''
        }
      })
    }
  }
  handleDelete = id => {
    const { characters } = this.state
    const notDeleted = characters.filter(character => character.id !== id)
    this.setState({
      characters: notDeleted
    })
  }

  toggleEdit = () => {
    this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing
      }
    })
  }

  handleEdit = id => {}

  render() {
    const { characters, name, job, id } = this.state
    return (
      <div className="medium-container alternate-background">
        <Table characters={characters} handleDelete={this.handleDelete} id={id} />
        <Form
          name={name}
          job={job}
          onNameChange={this.onNameChange}
          handleSubmit={this.handleSubmit}
          onJobChange={this.onJobChange}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}
//* 2 INPUTS = NAME INPUT && JOB INPUT
//* FORM (PARENT OF INPUTS)
//* APP --> RENDER IT ALL <FORM/> IN APP

//* TABLE
//* TABLE HEADER TABLE BODY (2 COMPONENTS)
//* 2 BUTTONS --> ADD DELETE // ADD EDIT
